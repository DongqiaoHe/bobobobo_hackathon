package com.joe.service;

import com.joe.bean.Moment;
import com.joe.mapper.MomentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MomentService {

    @Autowired
    private MomentMapper momentMapper;

    public void postMoment(Moment moment){
        System.out.println("service: "+moment);
        momentMapper.postMoment(moment);
    }

    public List<Moment> getAllMoment(int id){
        System.out.println("service: "+id);
        return momentMapper.getMoments(id);
    }

    public void addStar(Moment starRequest) {
        momentMapper.addStar(starRequest);
    }

    public List<Moment> getAllMoments() {
        return momentMapper.getAllMoments();
    }
}
