package com.CQM_backEnd.CQM_backEnd.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Question {
    @Id
    @GeneratedValue

    private int id;
    private String qsn;
    private int answer;
    private int score;
    private int maxScore;
    private String agentName;



}
