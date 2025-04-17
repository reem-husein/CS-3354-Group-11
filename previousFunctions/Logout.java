//Rebeca Rios's responsibility

public class Logout {
    public String logout(User user) {
        user.setUsername(null);
        user.setPassword(null);
        if (user.getUsername() == null && user.getPassword() == null) {
            return ("Logout successful");
        } else {
            return ("Error Logging Out");
        }

    }
}
