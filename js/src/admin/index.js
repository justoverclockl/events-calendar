import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';
import CalendarPage from './components/CalendarPage';

app.initializers.add('justoverclock/events-calendar', () => {
    registerWidget(app);
    app.extensionData.for('justoverclock-events-calendar').registerPage(CalendarPage);
});
