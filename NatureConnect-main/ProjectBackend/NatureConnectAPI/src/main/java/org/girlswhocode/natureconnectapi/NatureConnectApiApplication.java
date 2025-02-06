package org.girlswhocode.natureconnectapi;
import java.util.Scanner;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NatureConnectApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(NatureConnectApiApplication.class, args);

        /*
        @Autowired
        GoalRepository goalRepository;

        Scanner scanner = new Scanner(System.in);
        System.out.print("Goal id: ");
        Integer goalId = scanner.nextInt();
        System.out.print("Goal name: ");
        String goalName = scanner.nextLine();
        System.out.print("Goal short description: ");
        String goalShortDesc = scanner.nextLine();
        System.out.print("Goal body text : ");
        String goalBody = scanner.nextLine();
        System.out.print("Goal type of time length (d,w,m,y): ");
        String goalTypeTimeLength = scanner.nextLine();
        System.out.print("Goal creation date: ");
        String goalCreationDate = scanner.nextLine();
        scanner.close();
        Goal myGoal = new Goal(goalId, goalShortDesc, goalShortDesc, goalBody, goalTypeTimeLength, goalCreationDate);
        */

    }

}
