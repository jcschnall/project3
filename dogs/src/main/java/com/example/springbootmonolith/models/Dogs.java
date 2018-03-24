package com.example.springbootmonolith.models;

import lombok.*;
import javax.persistence.*;


@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "DOGS")
public class Dogs {


    public Dogs(String title, String image) {
        this.title = title;
        this.image = image;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "IMAGE")
    private String image;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setLen(String image) {
        this.image = image;
    }
}
