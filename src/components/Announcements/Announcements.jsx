import React from "react";
import "./Announcements.css"; // Import your CSS file

const Announcements = () => {
  // Sample announcements data
  const announcements = [
    {
      id: 1,
      title: "Special Event: Community Picnic",
      date: "May 28, 2024",
      description:
        "Join us for a fun-filled community picnic at the church grounds. Bring your family and friends for a day of games, food, and fellowship!",
    },
    {
      id: 2,
      title: "Volunteer Opportunities: Youth Ministry",
      date: "June 5, 2024",
      description:
        "We're looking for volunteers to help with our youth ministry programs. If you have a heart for serving and mentoring young people, sign up today!",
    },
    {
      id: 3,
      title: "Special Event: Community Picnic",
      date: "May 28, 2024",
      description:
        "Join us for a fun-filled community picnic at the church grounds. Bring your family and friends for a day of games, food, and fellowship!",
    },
    // Add more announcements as needed
  ];

  return (
    <section className="announcements">
      <div className="announcement-list">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="announcement">
            <h3>{announcement.title}</h3>
            <p className="announcement-date">{announcement.date}</p>
            <p>{announcement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcements;
