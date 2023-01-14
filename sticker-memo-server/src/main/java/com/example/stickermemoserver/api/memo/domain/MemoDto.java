package com.example.stickermemoserver.api.memo.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.List;

@Data
@AllArgsConstructor
public class MemoDto
{
    private String title;

    private String text;

    private List<Double> latitudes;

    private List<Double> longitudes;
}