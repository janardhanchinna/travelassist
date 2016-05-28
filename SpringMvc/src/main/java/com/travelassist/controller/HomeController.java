package com.travelassist.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by janardhanreddy on 5/25/16.
 */
@Controller
public class HomeController {

    @RequestMapping (value = "/")
    public String home(){
        return "test";
    }
}
