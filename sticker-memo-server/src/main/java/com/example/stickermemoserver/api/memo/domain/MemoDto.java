package com.example.stickermemoserver.api.memo.domain;

import lombok.Data;
import java.util.List;

@Data
public class MemoDto
{
    private String title;

    private String text;

    private List<Double> latitudes;

    private List<Double> longitudes;
}