<?php

namespace Justoverclock\EventsCalendar;

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return Migration::createTable(
    'calendar_events_obj',
    function (Blueprint $table) {
        $table->increments('id');

        // created_at & updated_at
        $table->timestamps();
    }
);


