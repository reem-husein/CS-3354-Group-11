public class Logout {
    public void logout(User user) {
        user.setUsername(null);
        user.setPassword(null);
    }
}
