import type {ReactNode} from 'react';

type Status = 'Completed' | 'Confirmed' | 'Applied' | 'Requested' | 'Not registered';

type Props = {
  /** Registration status from the schedule. */
  status: Status;
  /** Session date(s), as written in the schedule. */
  date: string;
};

type Step = {label: string; state: 'done' | 'current' | 'todo'};

function stepsFor(status: Status): Step[] {
  const registered = status === 'Completed' || status === 'Confirmed';
  const held = status === 'Completed';
  return [
    {label: registered ? 'Registered' : `Registration: ${status.toLowerCase()}`, state: registered ? 'done' : 'current'},
    {label: held ? 'Session attended' : 'Session', state: held ? 'done' : registered ? 'current' : 'todo'},
    {label: 'Notes written up', state: held ? 'current' : 'todo'},
  ];
}

/** Placeholder for the notes section of a course that has no notes yet. */
export default function NotesPending({status, date}: Props): ReactNode {
  const held = status === 'Completed';
  return (
    <div className="notes-pending" role="note">
      <div className="notes-pending__icon" aria-hidden="true">
        {held ? '📝' : '🗓️'}
      </div>
      <div>
        <div className="notes-pending__title">
          {held ? 'Notes still to be written up' : 'Notes will follow the session'}
        </div>
        <p className="notes-pending__text">
          {held
            ? `The session (${date}) has taken place; the handwritten notes have not been turned into a web page yet.`
            : `Notes are taken by hand during the session (${date}) and then rewritten here, as on the research ethics page.`}
        </p>
        <ul className="notes-pending__steps">
          {stepsFor(status).map((s) => (
            <li key={s.label} className={`notes-pending__step notes-pending__step--${s.state}`}>
              {s.state === 'done' ? '✓ ' : ''}
              {s.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
