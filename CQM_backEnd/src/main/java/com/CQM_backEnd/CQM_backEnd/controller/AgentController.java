package com.CQM_backEnd.CQM_backEnd.controller;

import com.CQM_backEnd.CQM_backEnd.model.Agent;
import com.CQM_backEnd.CQM_backEnd.service.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AgentController {
    @Autowired
    private AgentService service;

    //Save agent
    @PostMapping("/saveagent")
    public Agent saveAgent(@RequestBody Agent agent){
        return service.addagent(agent);
    }
    //list agents
    @GetMapping("/listagents")
   public List<Agent> Allagents(){
        return service.listAgents();
    }

}

