package com.table.course.Controller;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="mathesh")
public class Form {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String phone;
    private String gender;
    private String state;
    private int tenthpercentage;
    private int twelvethpercentage;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public int getTenthpercentage() {
        return tenthpercentage;
    }
    public void setTenthpercentage(int tenthpercentage) {
        this.tenthpercentage = tenthpercentage;
    }
    public int getTwelvethpercentage() {
        return twelvethpercentage;
    }
    public void setTwelvethpercentage(int twelvethpercentage) {
        this.twelvethpercentage = twelvethpercentage;
    }

    

}
