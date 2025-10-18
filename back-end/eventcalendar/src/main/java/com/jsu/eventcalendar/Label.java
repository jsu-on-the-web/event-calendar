package com.jsu.eventcalendar;

public class Label {
    private String id;
    private String name;
    private String color;

    /**--------------------------------------------
     *               Getters and Setters
     *---------------------------------------------**/
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

    public String getColor() {
        return color;
    }

    // TODO: Add validation for color format (e.g., HEX, RGB)
    public void setColor(String color) {
        this.color = color;
    }
}
