import type { Metadata } from "next";
import { ButtonLink, PageHero, PageShell } from "../site";

const calendarUrl = "https://calendar.google.com/calendar/embed?ctz=America%2FDenver&src=821cd4d937f84c161d9704d0df24304a3f51525d49bf80372ff7c7f8006fedf2%40group.calendar.google.com";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Upcoming Basically Income PAC meetings, public conversations, campaign actions, and community events.",
};

export default function CalendarPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Calendar"
        title="Fill the calendar. Build the politics."
        body="Basically Income PAC uses public meetings, campaign actions, and serious conversations to turn support for basic income into political participation. This calendar is the shared record of what comes next."
        actions={<ButtonLink href={calendarUrl} variant="navy" external>Open in Google Calendar</ButtonLink>}
        visual={{src: "/community-abundance.webp", alt: "Families and neighbors gathering for a joyful public celebration", caption: "Movements become real when people meet, organize, and imagine the future together.", tone: "orange"}}
        aside={<><span className="card-number">RECURRING COMMUNITY</span><h3>Basic Income Roundtable</h3><p>Saturdays at 11 a.m. Eastern, 10 Central, 9 Mountain, and 8 Pacific. New public events and campaign actions will be added here as they are scheduled.</p></>}
      />

      <section className="content-section">
        <div className="wide-shell">
          <h2>Upcoming events</h2>
          <p className="lede">The calendar is currently light because the program is being rebuilt. We are keeping it public so the organization has a clear commitment to fill it with useful political work.</p>
          <div className="calendar-frame">
            <iframe
              src={calendarUrl}
              title="Basically Income PAC Google Calendar"
              loading="lazy"
            />
          </div>
          <div className="calendar-note">
            <div>
              <h2>Have an event that belongs here?</h2>
              <p>Suggest a public conversation, candidate forum, organizing meeting, or campaign action that could strengthen basic income politics.</p>
            </div>
            <ButtonLink href="mailto:contact@basicallyincome.org?subject=Calendar%20event%20suggestion" variant="cream" external>Suggest an Event</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
