package org.girlswhocode.natureconnectapi;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table (name= "goal")
public class Goal {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Temporal(TemporalType.TIMESTAMP)

    private Integer goalId;

    private String name;

    @Column(name="shortDesc",columnDefinition="TEXT")
    private String shortDesc;

    @Column(name="body",columnDefinition="MEDIUMTEXT")
    private String body;

    private char goalType;

    private Date creationDate;

    private Date lastModDate;

    public Goal(Integer goalId, String name, String shortDesc, String body, String goalType, String creationDate) {
    }

    public Goal() {

    }

    public Integer getGoalId() {
        return goalId;
    }

    public void setId(Integer goalId) {
        this.goalId = goalId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortDesc() {
        return shortDesc;
    }

    public void setShortDesc(String shortDesc) {
        this.shortDesc = shortDesc;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public char getGoalType() {
        return goalType;
    }

    public void setTypeTimeLength(char typeTimeLength) {
        this.goalType = goalType;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Date getLastModDate() {
        return lastModDate;
    }

    public void setLastModDate(Date lastModDate) {
        this.lastModDate = lastModDate;
    }



}