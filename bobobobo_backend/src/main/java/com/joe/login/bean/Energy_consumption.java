package com.joe.login.bean;

import lombok.Data;

@Data
public class Energy_consumption {

    int postcode;
    int year;
    String energy_type;
    String kwh_total;
    String gi_total;
    Double total_cost;
    String total_emission;
    String avg_emission;
    String num_customers;

}
