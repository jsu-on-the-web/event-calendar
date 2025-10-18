package com.jsu.eventcalendar;

import java.util.List;

import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
public class EventController {
    private EventDao eventDao;

    @QueryMapping
    public List<Event> getEvents() {
        return eventDao.findAll();
    }
}
