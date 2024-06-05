package com.indeed.server.model;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "posts")
@Data
//since it's a mongo db model,@Entity for sql
public class PostModel {
    @NotNull
    @NotEmpty
    private String profile;

    @NotNull
    private String type;

    @NotNull
    private String description;

    @NotNull
    private String experience;

    @NotNull
    private String[] technology;

    @NotNull
    private String salary;

    @CreatedDate
    private LocalDateTime createdAt;
}
