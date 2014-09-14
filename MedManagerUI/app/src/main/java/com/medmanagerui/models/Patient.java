package com.medmanagerui.models;

import com.medmanagerui.networking.NetworkingService;

import java.util.Calendar;

import retrofit.Callback;

public class Patient {

    private String id;

    private String name;

    private long dob;

    private String address;

    private String gp;

    private String doctor;

    private String previousDoctor;

    private String ailment;

    private String allergies;

    private String notes;

    private int bed;

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

    public Calendar getDob() {
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeInMillis(dob);
        return calendar;
    }

    public void setDob(Calendar dob) {

        this.dob = dob.getTimeInMillis();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGp() {
        return gp;
    }

    public void setGp(String gp) {
        this.gp = gp;
    }

    public String getPreviousDoctor() {
        return previousDoctor;
    }

    public void setPreviousDoctor(String doctorId) {
        this.previousDoctor = doctorId;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String previousDocId) {
        this.doctor = previousDocId;
    }

    public String getAilment() {
        return ailment;
    }

    public void setAilment(String ailment) {
        this.ailment = ailment;
    }

    public String getAllergies() {
        return allergies;
    }

    public void setAllergies(String allergies) {
        this.allergies = allergies;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public int getBed() {
        return bed;
    }

    public void setBed(int bed) {
        this.bed = bed;
    }
    public void save(Callback cb) {
        new NetworkingService().savePatient(this, cb);
    }
}
