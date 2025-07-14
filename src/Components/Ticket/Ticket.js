import React, { useEffect, useState, useRef } from 'react';
import './Ticket.css';
import html2pdf from 'html2pdf.js';

const Ticket = ({ index }) => {
  const [ticket, setTicket] = useState(null);
  const ticketRef = useRef(null);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("eTicketData"));
    if (storedTickets && storedTickets.length > index) {
      setTicket(storedTickets[index]);
    }
  }, [index]);

  const downloadPDF = () => {
    const element = ticketRef.current;
    const opt = {
      margin: 0,
      filename: `${ticket.passengerName}-${ticket.airline}-${ticket.seatNumber}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: 'px',
        format: [850, 560],
        orientation: 'landscape',
      },
    };
    html2pdf().set(opt).from(element).save();
  };

  if (!ticket) return <p>Loading ticket...</p>;

  return (
    <div className="ticket-page">
      <div className="ticket-row-layout">
        <div className="ticket-wrapper" ref={ticketRef}>
          <div className="ticket">
            <div className="ticket-left">
              <div className="ticket-header">
                <h2>BOARDING PASS</h2>
                <p className="airline">{ticket.airline}</p>
              </div>

              <div className="ticket-body">
                <div className="ticket-row"><span>Passenger</span><strong>{ticket.passengerName}</strong></div>
                <div className="ticket-row"><span>Flight</span><strong>{ticket.flightNumber}</strong></div>
                <div className="ticket-row"><span>Departure</span><strong>{ticket.departureTime}</strong></div>
                <div className="ticket-row"><span>Arrival</span><strong>{ticket.arrivalTime}</strong></div>
                <div className="ticket-row"><span>From</span><strong>{ticket.from}</strong></div>
                <div className="ticket-row"><span>To</span><strong>{ticket.destination}</strong></div>
                <div className="ticket-row"><span>Seat</span><strong>{ticket.seatNumber}</strong></div>
                <div className="ticket-row"><span>Date</span><strong>{ticket.flightDate}</strong></div>
              </div>

              <div className="ticket-footer">
                <p>Enjoy your flight with <strong>{ticket.airline}</strong> ✈️</p>
              </div>
            </div>

            <div className="ticket-divider"></div>

            <div className="ticket-right">
              <div className="ticket-body small">
                <div className="ticket-row"><span>Flight</span><strong>{ticket.flightNumber}</strong></div>
                <div className="ticket-row"><span>From</span><strong>{ticket.from}</strong></div>
                <div className="ticket-row"><span>To</span><strong>{ticket.destination}</strong></div>
                <div className="ticket-row"><span>Date</span><strong>{ticket.flightDate}</strong></div>
              </div>
              <div className="barcode"></div>
            </div>
          </div>
        </div>

        <div className="ticket-button-side">
          <button className="btn filled" onClick={downloadPDF}>Download as PDF</button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
