package com.example.springbootmonolith.models;

import lombok.*;
import javax.persistence.*;


@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "CATS")
public class Cats {


    public Cats(String title, String image) {
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

    public void setImage(String image) {
        this.image = image;
    }
}
