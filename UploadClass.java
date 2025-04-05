// Axel's Responsibility

/**
 * Base class for handling uploads before verification
 * Handles basic contact info validation
 */
public class UploadClass {
    protected String email, phoneNumber;

    public UploadClass() {}
    public UploadClass(String email, String phoneNumber) {
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    // Standard getters and setters
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    /**
     * Checks if this upload has valid contact info
     */
    public boolean validateUpload() {
        return validateEmail(email) && validatePhoneNumber(phoneNumber);
    }

    /**
     * Makes sure we have a real email that's not too long
     * Also blocks some special characters that could cause problems
     */
    protected boolean validateEmail(String email) {
        return email != null && email.length() <= 254 &&
               email.matches("^[^!#$%^&*()+=\\[\\]{}|;:,<>?/\\\\]+@[^@]+\\.[^@]+$");
    }

    /**
     * Accepts US phone formats with or without country code
     * Strips out all non-digits before checking length
     */
    protected boolean validatePhoneNumber(String phone) {
        if (phone == null) return false;
        String digits = phone.replaceAll("\\D", "");
        return digits.length() == 10 || (digits.startsWith("1") && digits.length() == 11);
    }
}

/**
 * Specialized upload class for driver's license information
 * Extends the basic upload with identity verification
 */
public class DriverLicenseClass extends UploadClass {
    private String fullName, dob, licenseNumber;

    public DriverLicenseClass() {}
    public DriverLicenseClass(String email, String phone, String name, String dob, String license) {
        super(email, phone);
        this.fullName = name;
        this.dob = dob;
        this.licenseNumber = license;
    }

    // Identity field getters and setters
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getDob() { return dob; }
    public void setDob(String dob) { this.dob = dob; }

    public String getLicenseNumber() { return licenseNumber; }
    public void setLicenseNumber(String licenseNumber) { this.licenseNumber = licenseNumber; }

    /**
     * Check both contact info and identity fields
     */
    @Override
    public boolean validateUpload() {
        return super.validateUpload() &&
               validateFullName(fullName) &&
               validateDob(dob) &&
               validateLicenseNumber(licenseNumber);
    }

    /**
     * Name should exist and not be too long
     */
    protected boolean validateFullName(String name) {
        return name != null && !name.trim().isEmpty() && name.length() <= 50;
    }

    /**
     * DOB must be in YYYYMMDD format and user must be at least 18
     * This is important for legal reasons
     */
    protected boolean validateDob(String dob) {
        if (dob == null || dob.length() != 8) return false;
        try {
            int year = Integer.parseInt(dob.substring(0, 4));
            int month = Integer.parseInt(dob.substring(4, 6));
            int day = Integer.parseInt(dob.substring(6, 8));
            java.time.LocalDate birth = java.time.LocalDate.of(year, month, day);
            return java.time.Period.between(birth, java.time.LocalDate.now()).getYears() >= 18;
        } catch (Exception e) { return false; }
    }

    /**
     * License needs to be 9 chars after removing spaces/dashes
     * Can't start with zero and must be alphanumeric
     */
    protected boolean validateLicenseNumber(String license) {
        if (license == null) return false;
        license = license.replaceAll("[\\s-]", "");
        return license.length() == 9 && !license.startsWith("0") && license.matches("[A-Za-z0-9]+");
    }
}

/**
 * Class for uploads that have been verified
 * Includes additional administrative fields for debt tracking
 */
public class VerifiedUpload extends UploadClass {
    private String debtOwedTo, debtType, missingWork, notes;
    private float debtAmount;

    public VerifiedUpload() {}
    public VerifiedUpload(String email, String phone) { super(email, phone); }
    public VerifiedUpload(String email, String phone, String owedTo, String type, float amount, String work, String notes) {
        super(email, phone);
        this.debtOwedTo = owedTo;
        this.debtType = type;
        this.debtAmount = amount;
        this.missingWork = work;
        this.notes = notes;
    }

    // Administrative field getters and setters
    public String getDebtOwedTo() { return debtOwedTo; }
    public void setDebtOwedTo(String d) { this.debtOwedTo = d; }

    public String getDebtType() { return debtType; }
    public void setDebtType(String d) { this.debtType = d; }

    public float getDebtAmount() { return debtAmount; }
    public void setDebtAmount(float d) { this.debtAmount = d; }

    public String getMissingWork() { return missingWork; }
    public void setMissingWork(String m) { this.missingWork = m; }

    public String getNotes() { return notes; }
    public void setNotes(String n) { this.notes = n; }

    /**
     * Check both contact info and all admin fields
     */
    @Override
    public boolean validateUpload() {
        return super.validateUpload() && validateAdminFields();
    }

    /**
     * Run all the admin field validations in one go
     */
    private boolean validateAdminFields() {
        return validateDebtOwedTo(debtOwedTo) &&
               validateDebtType(debtType) &&
               validateDebtAmount(debtAmount) &&
               validateMissingWork(missingWork) &&
               validateNotes(notes);
    }

    // Admin field validations - mostly just size checks
    protected boolean validateDebtOwedTo(String s) { return s == null || s.length() <= 100; }
    protected boolean validateDebtType(String s) { return s == null || s.length() <= 160; }
    protected boolean validateDebtAmount(float a) { return a >= 0 && a <= 9999999999f; }
    protected boolean validateMissingWork(String s) { return s == null || s.length() <= 1000; }
    protected boolean validateNotes(String s) { return s == null || s.length() <= 1000; }
}