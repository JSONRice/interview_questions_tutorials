class Namer {
    final private String firstName;
    final private String lastName;

    public Namer(String fn,String ln) {
        firstName=fn;
        lastName=ln;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName()  {
        return lastName;
    }
}