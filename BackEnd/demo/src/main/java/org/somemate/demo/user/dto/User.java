package org.somemate.demo.user.dto;

public class User {
    private int idx;
    private String phone;
    private String name;
    private String password;
    private String mbti;
    private String refreshToken;

    public User(String phone, String password) {
        this.phone = phone;
        this.password = password;
    }

    public User(String phone, String name, String password, String mbti, String refreshToken) {
        this.phone = phone;
        this.name = name;
        this.password = password;
        this.refreshToken = refreshToken;
        this.mbti = mbti;
    }

    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMbti() {
        return mbti;
    }

    public void setMbti(String mbti) {
        this.mbti = mbti;
    }
}
