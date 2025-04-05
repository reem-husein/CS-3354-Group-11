import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class LoginHandlerTest {
    @Test
    public void testUserLogin1() {
        User user = new User("test@email.com", "testing^65");
        LoginHandler loginHandler = new LoginHandler();
        assertEquals(loginHandler.userLogin("test@email.com", "testing^65", user), "Login Successful");

    }

    @Test
    public void testUserLogin2() {
        User user = new User("test@email.com", "testing^65");
        LoginHandler loginHandler = new LoginHandler();
        assertEquals(loginHandler.userLogin("test@email.com", "testing^65", user), "Invalid Username");

    }

    @Test
    public void testUserLogin3() {
        User user = new User("test.t3@email.com", "testing^65");
        LoginHandler loginHandler = new LoginHandler();
        assertEquals(loginHandler.userLogin("test.t3@email.com", "test", user), "Invalid Password");

    }

    @Test
    public void testUserLogin4() {
        User user = new User("test.t@email.com", "testing^65");
        LoginHandler loginHandler = new LoginHandler();
        assertEquals(loginHandler.userLogin("t.com", "t", user), "Invalid Username");

    }

    @Test
    public void testUserLogin5() {
        User user = new User("test.t@email.com", "testing^65");
        LoginHandler loginHandler = new LoginHandler();
        assertEquals(loginHandler.userLogin("test.t@email.com", "testing^64", user), "Account not in system");

    }

}
