package com.CQM_backEnd.CQM_backEnd.service;

import com.CQM_backEnd.CQM_backEnd.model.Agent;
import com.CQM_backEnd.CQM_backEnd.repository.AgentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AgentService {
    @Autowired
    private AgentRepository repository;

    //Save agent
    public Agent addagent(Agent agent){
        return repository.save(agent);
    }

    //list agents
    public List<Agent> listAgents(){
      return repository.findAll();
    }
}
