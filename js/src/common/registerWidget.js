import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';
import GoogleCalendarEvents from './components/GoogleCalendarEvents';

export default function (app) {
    new Widgets()
        .add({
            key: 'GoogleCalEvents',
            component: GoogleCalendarEvents,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 1,
        })
        .extend(app, 'justoverclock-events-calendar');
}
