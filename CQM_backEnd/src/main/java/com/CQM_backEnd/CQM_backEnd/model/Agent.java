package com.CQM_backEnd.CQM_backEnd.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;


import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Getter
@Table(name="agent")
public class Agent {
   @Id
   @GeneratedValue
   private int id;
   private String name;
   private String supervisor;
   private String rdate;
   private String customernumber;
   private String callref;
   private String callrecordingRef;




}
