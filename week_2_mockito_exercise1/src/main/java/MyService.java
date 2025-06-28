package main.java;
public class MyService {
    private final main.java.ExternalApi api;
    public MyService(main.java.ExternalApi api){
        this.api=api;
    }
    public String fetchData(){
        return api.getData();
    }
}
