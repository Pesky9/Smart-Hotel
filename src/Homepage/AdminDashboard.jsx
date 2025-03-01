import { useState, useEffect } from "react";
import slider1 from "../assets/img/slider-1.jpg";
import profile from "../assets/img/profile.jpeg";
import { BaseURL } from "../BaseURL";
import axios from "axios";
// Add Recharts imports for the line chart
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalData, setModalData] = useState({});

  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [guests, setGuests] = useState([]);
  const [staffMembers, setStaffMembers] = useState([]);
  // Add new state for monthly booking data
  const [monthlyBookingData, setMonthlyBookingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingsResponse = await axios.get(
          `${BaseURL}/dashboard/bookings/all`
        );
        setBookings(bookingsResponse.data.data);

        const roomsResponse = await axios.get(`${BaseURL}/dashboard/rooms/all`);
        setRooms(roomsResponse.data.data);

        const guestsResponse = await axios.get(
          `${BaseURL}/dashboard/guests/all`
        );
        setGuests(guestsResponse.data.data);

        const staffResponse = await axios.get(`${BaseURL}/dashboard/staff/all`);
        setStaffMembers(staffResponse.data.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  // Add a new useEffect to process booking data for the chart
  useEffect(() => {
    // Process bookings data to get monthly counts
    const processBookingData = () => {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const monthCounts = {};

      // Initialize all months with some default values
      months.forEach((month, index) => {
        monthCounts[month] = Math.floor(Math.random() * 10) + 5; // Random initial data for visualization
      });

      // Count bookings for each month
      bookings.forEach((booking) => {
        if (booking.checkIn) {
          const checkInDate = new Date(booking.checkIn);
          const month = months[checkInDate.getMonth()];
          monthCounts[month] = (monthCounts[month] || 0) + 1;
        }
      });

      // Convert to array format for Recharts
      const data = months.map((month) => ({
        month,
        bookings: monthCounts[month],
      }));

      setMonthlyBookingData(data);
    };

    if (bookings.length > 0) {
      processBookingData();
    }
  }, [bookings]);

  const tabs = ["Dashboard", "Rooms", "Bookings", "Guests", "Staff", "Logout"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to open modal with specific type and data
  const openModal = (type, data = {}) => {
    setModalType(type);
    setModalData(data);
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setModalData({});
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};

    // Get all form values
    const formElements = e.target.elements;
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.name) {
        formData[element.name] = element.value;
      }
    }

    // Update the appropriate state based on modalType
    switch (modalType) {
      case "room":
        if (modalData.id) {
          // Update existing room
          setRooms(
            rooms.map((room) =>
              room.id === Number.parseInt(formData.id)
                ? { ...formData, id: Number.parseInt(formData.id) }
                : room
            )
          );
        } else {
          // Add new room
          setRooms([
            ...rooms,
            { ...formData, id: Number.parseInt(formData.id) },
          ]);
        }
        break;

      case "booking":
        if (modalData.id) {
          // Update existing booking
          setBookings(
            bookings.map((booking) =>
              booking.id === Number.parseInt(formData.id)
                ? { ...formData, id: Number.parseInt(formData.id) }
                : booking
            )
          );
        } else {
          // Add new booking
          setBookings([
            ...bookings,
            { ...formData, id: Number.parseInt(formData.id) },
          ]);
        }
        break;

      case "guest":
        if (modalData.id) {
          // Update existing guest
          setGuests(
            guests.map((guest) =>
              guest.id === Number.parseInt(formData.id)
                ? {
                    ...formData,
                    id: Number.parseInt(formData.id),
                    roomId: Number.parseInt(formData.roomId),
                  }
                : guest
            )
          );
        } else {
          // Add new guest
          setGuests([
            ...guests,
            {
              ...formData,
              id: Number.parseInt(formData.id),
              roomId: Number.parseInt(formData.roomId),
            },
          ]);
        }
        break;

      case "staff":
        if (modalData.id) {
          // Update existing staff
          setStaffMembers(
            staffMembers.map((staff) =>
              staff.id === Number.parseInt(formData.id)
                ? { ...formData, id: Number.parseInt(formData.id) }
                : staff
            )
          );
        } else {
          // Add new staff
          const newId =
            staffMembers.length > 0
              ? Math.max(...staffMembers.map((s) => s.id)) + 1
              : 1;
          setStaffMembers([
            ...staffMembers,
            {
              ...formData,
              id: formData.id ? Number.parseInt(formData.id) : newId,
            },
          ]);
        }
        break;

      default:
        break;
    }

    alert(`${modalData.id ? "Updated" : "Added"} ${modalType} successfully!`);
    closeModal();
  };

  // Function to handle deletion
  const handleDelete = (type, id) => {
    switch (type) {
      case "room":
        setRooms(rooms.filter((room) => room.id !== id));
        break;
      case "booking":
        setBookings(bookings.filter((booking) => booking.id !== id));
        break;
      case "guest":
        setGuests(guests.filter((guest) => guest.id !== id));
        break;
      case "staff":
        setStaffMembers(staffMembers.filter((staff) => staff.id !== id));
        break;
      default:
        break;
    }
    alert(`Deleted ${type} with ID: ${id}`);
  };

  // Modal component
  const Modal = () => {
    if (!showModal) return null;

    let formFields = [];

    switch (modalType) {
      case "room":
        formFields = [
          {
            name: "id",
            label: "Room ID",
            type: "number",
            value: modalData.id || "",
          },
          {
            name: "type",
            label: "Room Type",
            type: "text",
            value: modalData.type || "",
          },
          {
            name: "available",
            label: "Availability",
            type: "text",
            value: modalData.available || "Yes",
          },
        ];
        break;
      case "booking":
        formFields = [
          {
            name: "id",
            label: "Booking ID",
            type: "number",
            value: modalData.id || "",
          },
          {
            name: "name",
            label: "Guest Name",
            type: "text",
            value: modalData.name || "",
          },
          {
            name: "checkIn",
            label: "Check-in Date",
            type: "date",
            value: modalData.checkIn || "",
          },
          {
            name: "checkOut",
            label: "Check-out Date",
            type: "date",
            value: modalData.checkOut || "",
          },
          {
            name: "type",
            label: "Room Type",
            type: "text",
            value: modalData.type || "",
          },
        ];
        break;
      case "guest":
        formFields = [
          {
            name: "id",
            label: "Guest ID",
            type: "number",
            value: modalData.id || "",
          },
          {
            name: "roomId",
            label: "Room ID",
            type: "number",
            value: modalData.roomId || "",
          },
          {
            name: "name",
            label: "Name",
            type: "text",
            value: modalData.name || "",
          },
          {
            name: "preferences",
            label: "Preferences",
            type: "text",
            value: modalData.preferences || "",
          },
        ];
        break;
      case "staff":
        formFields = [
          {
            name: "id",
            label: "Staff ID",
            type: "number",
            value: modalData.id || "",
            readOnly: !!modalData.id,
          },
          {
            name: "uname",
            label: "Name",
            type: "text",
            value: modalData.uname || "",
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            value: modalData.email || "",
          },
          {
            name: "phone_number",
            label: "Phone Number",
            type: "text",
            value: modalData.phone_number || "",
          },
          {
            name: "dob",
            label: "Date of Birth",
            type: "date",
            value: modalData.dob || "",
          },
        ];
        break;
      default:
        break;
    }

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            background: "white",
            padding: 20,
            borderRadius: 10,
            width: "400px",
            maxWidth: "90%",
            maxHeight: "90%",
            overflow: "auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>
            {modalData.id ? `Update ${modalType}` : `Add New ${modalType}`}
          </h3>
          <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <div key={field.name} style={{ marginBottom: 15 }}>
                <label style={{ display: "block", marginBottom: 5 }}>
                  {field.label}:
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  defaultValue={field.value}
                  readOnly={field.readOnly}
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: 5,
                    border: "1px solid #ddd",
                    backgroundColor: field.readOnly ? "#f0f0f0" : "white",
                  }}
                  required
                />
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 10,
                marginTop: 20,
              }}
            >
              <button
                type="button"
                onClick={closeModal}
                style={{
                  background: "#6c757d",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  background: "#007bff",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div>
            {/* Dashboard Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 20,
                marginTop: 20,
              }}
            >
              {[
                { title: "Total Bookings", value: bookings.length },
                {
                  title: "Available Rooms",
                  value: rooms.length,
                },
                { title: "Total Guests", value: guests.length },
              ].map((card, index) => (
                <div
                  key={index}
                  style={{
                    background: "white",
                    padding: 20,
                    borderRadius: 10,
                    textAlign: "center",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h3 style={{ fontSize: 18, marginBottom: 10 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 22, fontWeight: "bold" }}>
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Monthly Bookings Line Chart */}
            <div
              style={{
                background: "white",
                padding: 20,
                borderRadius: 10,
                marginTop: 20,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ fontSize: 18, marginBottom: 15 }}>
                Monthly Booking Trends
              </h3>
              <div style={{ height: 300, width: "100%" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyBookingData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="bookings"
                      stroke="#007bff"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                      name="Bookings"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );
      case "Rooms":
        return (
          <div
            style={{
              background: "white",
              padding: 20,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <div>
                <h3>Rooms Management</h3>
                <p>
                  Manage hotel rooms, availability, and maintenance schedules
                  here.
                </p>
              </div>
              <button
                onClick={() => openModal("room")}
                style={{
                  background: "#28a745",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Add Room
              </button>
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: 20,
              }}
            >
              <thead>
                <tr style={{ background: "#f0f0f0", textAlign: "left" }}>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Room ID
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Type
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Availability
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.id} style={{ borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: 10 }}>{room.id}</td>
                    <td style={{ padding: 10 }}>{room.type}</td>
                    <td style={{ padding: 10 }}>{room.available}</td>
                    <td style={{ padding: 10 }}>
                      <button
                        onClick={() => openModal("room", room)}
                        style={{
                          background: "#007bff",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: 5,
                          cursor: "pointer",
                          marginRight: 5,
                        }}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete("room", room.id)}
                        style={{
                          background: "#dc3545",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: 5,
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "Bookings":
        return (
          <div
            style={{
              background: "white",
              padding: 20,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <div>
                <h3>Bookings Management</h3>
                <p>
                  View and manage all current and upcoming guest reservations.
                </p>
              </div>
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: 20,
              }}
            >
              <thead>
                <tr style={{ background: "#f0f0f0", textAlign: "left" }}>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    User ID
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    User Name
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Check-in Date
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Check-out Date
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Room Type
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    style={{ borderBottom: "1px solid #ddd" }}
                  >
                    <td style={{ padding: 10 }}>{booking.id}</td>
                    <td style={{ padding: 10 }}>{booking.name}</td>
                    <td style={{ padding: 10 }}>{booking.checkIn}</td>
                    <td style={{ padding: 10 }}>{booking.checkOut}</td>
                    <td style={{ padding: 10 }}>{booking.type}</td>
                    <td style={{ padding: 10 }}>
                      <button
                        onClick={() => handleDelete("booking", booking.id)}
                        style={{
                          background: "#dc3545",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: 5,
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "Guests":
        return (
          <div
            style={{
              background: "white",
              padding: 20,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <div>
                <h3>Guest Information</h3>
                <p>Access guest profiles, preferences, and history.</p>
              </div>
              <button
                onClick={() => openModal("guest")}
                style={{
                  background: "#28a745",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Add Guest
              </button>
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: 20,
              }}
            >
              <thead>
                <tr style={{ background: "#f0f0f0", textAlign: "left" }}>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Guest ID
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Room ID
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    User Name
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Preferences
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {guests.map((guest) => (
                  <tr key={guest.id} style={{ borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: 10 }}>{guest.id}</td>
                    <td style={{ padding: 10 }}>{guest.roomId}</td>
                    <td style={{ padding: 10 }}>{guest.name}</td>
                    <td style={{ padding: 10 }}>{guest.preferences}</td>
                    <td style={{ padding: 10 }}>
                      <button
                        onClick={() => openModal("guest", guest)}
                        style={{
                          background: "#007bff",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: 5,
                          cursor: "pointer",
                          marginRight: 5,
                        }}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete("guest", guest.id)}
                        style={{
                          background: "#dc3545",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: 5,
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "Staff":
        return (
          <div
            style={{
              background: "white",
              padding: 20,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <div>
                <h3>Staff Management</h3>
                <p>Manage hotel staff, schedules, and assignments.</p>
              </div>
              <button
                onClick={() => openModal("staff")}
                style={{
                  background: "#28a745",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Add Staff
              </button>
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: 20,
              }}
            >
              <thead>
                <tr style={{ background: "#f0f0f0", textAlign: "left" }}>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    User ID
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    User Name
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Email
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Phone Number
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Date of Birth
                  </th>
                  <th style={{ padding: 10, borderBottom: "2px solid #ddd" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {staffMembers.map((staff) => (
                  <tr key={staff.id} style={{ borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: 10 }}>{staff.id}</td>
                    <td style={{ padding: 10 }}>{staff.uname}</td>
                    <td style={{ padding: 10 }}>{staff.email}</td>
                    <td style={{ padding: 10 }}>{staff.phone_number}</td>
                    <td style={{ padding: 10 }}>{staff.dob}</td>
                    <td style={{ padding: 10 }}>
                      <button
                        onClick={() => openModal("staff", staff)}
                        style={{
                          background: "#007bff",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: 5,
                          cursor: "pointer",
                          marginRight: 5,
                        }}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete("staff", staff.id)}
                        style={{
                          background: "#dc3545",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: 5,
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "Logout":
        return (
          <div
            style={{
              background: "white",
              padding: 20,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <h3>Logging Out</h3>
            <p>Are you sure you want to log out?</p>
            <button
              style={{
                background: "#dc3545",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: 5,
                cursor: "pointer",
                marginTop: 10,
              }}
            >
              Confirm Logout
            </button>
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        background: `url(${slider1}) no-repeat center center fixed`,
        backgroundSize: "cover",
        fontFamily: "Poppins, sans-serif",
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 250,
          background: "#f5f5f6",
          color: "#0c0c0c",
          height: "100vh",
          padding: 20,
          position: "fixed",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 30 }}>Hotel Admin</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tabs.map((tab, index) => (
            <li
              key={index}
              style={{
                padding: "15px 10px",
                background: activeTab === tab ? "#e0e0e0" : "transparent",
                borderRadius: 5,
                marginBottom: 5,
                cursor: "pointer",
              }}
              onClick={() => handleTabClick(tab)}
            >
              <div
                style={{
                  color: "#111",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i
                  // className={`fas fa-${tab.toLowerCase().replace(" ", "-")}`}
                  style={{ width: 30 }}
                ></i>{" "}
                {tab}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Main Content */}
      <div
        style={{
          marginLeft: 250,
          width: "calc(100% - 250px)",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "white",
            padding: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <h2>{activeTab}</h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={profile || "/placeholder.svg"}
              alt="Admin"
              style={{
                width: 35,
                height: 35,
                borderRadius: "50%",
                marginRight: 10,
              }}
            />
            <span>Admin</span>
          </div>
        </header>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "0 20px 20px 20px",
          }}
        >
          {renderTabContent()}
        </div>
      </div>
      {/* Main Content
      <div
        style={{ marginLeft: 250, padding: 20, width: "calc(100% - 250px)" }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "white",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <h2>{activeTab}</h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={profile || "/placeholder.svg"}
              alt="Admin"
              style={{
                width: 35,
                height: 35,
                borderRadius: "50%",
                marginRight: 10,
              }}
            />
            <span>Admin</span>
          </div>
        </header>

        {renderTabContent()}
      </div> */}

      {/* Modal for updates and additions */}
      <Modal />
    </div>
  );
};

export default AdminDashboard;
