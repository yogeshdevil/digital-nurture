package week_1_datastructures_algorithms.exercise_7_financialforcast;
import java.util.*;
public class financial{
    public static double futurevalue(double principal,double rate,int year){
        if(year==0){
            return principal;
        }
        return futurevalue(principal,rate,year-1)*(1+rate);
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        double principal=sc.nextDouble();
        double rate=sc.nextDouble();
        int year=sc.nextInt();
        double result=futurevalue(principal,rate,year);
        System.out.println(result);
        sc.close();
    }
}