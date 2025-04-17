import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class LogoutTest {
    @Test
    public void testLogout1() {
        User user = new User("test@email.com", "testing^65");
        Logout logoutHandler = new Logout();
        assertEquals(logoutHandler.logout(user), "Logout successful");
    }

    @Test
    public void testLogout2() {
        User user = new User("test@email.com", "testing^65");
        Logout logoutHandler = new Logout();
        assertEquals(logoutHandler.logout(user), "Error Logging Out");
    }
}
