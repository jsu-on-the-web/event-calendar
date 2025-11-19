package com.jsu.eventcalendar;

import java.time.LocalDateTime;

public class Event {
    private String id;
    private String name;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String location;
    private Label label;

    /**--------------------------------------------
     *               Getters and Setters
     *---------------------------------------------**/

    // TODO: Add validation for these setters, they're currently just basic

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        // Need to check startDate is before endDate
        if (endDate != null && startDate.isAfter(endDate)) {
            throw new IllegalArgumentException("ERROR! Start date must be before end date.");
        }
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        // Same but in reverse; make sure we don't set an endDate that happens before the startDate
        if (startDate != null && endDate.isBefore(startDate)) {
            throw new IllegalArgumentException("ERROR! End date must be after start date.");
        }
        this.endDate = endDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        // It'd be nice to add validation for location format
        // (e.g., address, coordinates) but for now, just set it
        this.location = location;
    }

    public Label getLabel() {
        return label;
    }

    public void setLabel(Label label) {
        this.label = label;
    }

    /**--------------------------------------------
     *               Other Methods
     *---------------------------------------------**/

    @Override
    public String toString() {
        return "Event: " +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", startDate=" + startDate.toString() +
                ", endDate=" + endDate.toString() +
                ", location='" + location + '\'' +
                ", label=" + label.toString() +
                '}';
    }

}
