/*
 * This file is part of justoverclock/last-tweet.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class GoogleCalendarEvents extends Widget {
    oncreate(vnode) {}

    className() {
        return 'GoogleCalEvents';
    }

    icon() {
        // Widget icon.
        return 'far fa-calendar-check';
    }

    title() {
        // Widget title.
        return app.translator.trans('justoverclock-events-calendar.forum.widget-title');
    }

    content() {
        return (
            <div>
                <ul id="events-upcoming"></ul>
                <ul id="events-past"></ul>
            </div>
        );
    }
}
