//Axel Niyonzima's responsibility


/**
* Class for handling unverified uploads
*/


public class UnverifiedUpload {
    // Common fields based on the second image
    protected String email;
    protected String phoneNumber;

    /**
     * Default constructor
     */
    public UnverifiedUpload() {
    }

    /**
     * Constructor with parameters
     * 
     * @param email User's email address
     * @param phoneNumber User's phone number
     */
    public UnverifiedUpload(String email, String phoneNumber) {
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    // Getters and setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    /**
     * Base validation method for upload data
     * 
     * @return true if the data is valid, false otherwise
     */
    public boolean validateUpload() {
        // Basic validation method to be overridden by subclasses
        // Actual validation logic will be implemented later
        return false;
    }

    /**
     * Checks if email format is valid
     * 
     * @param email The email to validate
     * @return true if email is valid, false otherwise
     */
    protected boolean validateEmail(String email) {
        // Email validation will be implemented later
        return false;
    }

    /**
     * Checks if phone number format is valid
     * 
     * @param phoneNumber The phone number to validate
     * @return true if phone number is valid, false otherwise
     */
    protected boolean validatePhoneNumber(String phoneNumber) {
        // Phone number validation will be implemented later
        return false;
    }
}

/**
 * Driver License specific upload subclass
 * Extends the base UnverifiedUpload class with driver license specific fields
 */
public class DriverLicenseClass extends UnverifiedUpload {
    // Driver license specific fields based on the first image
    private String fullName;
    private String dob; // Date of birth in YYYYMMDD format
    private String licenseNumber;

    /**
     * Default constructor
     */
    public DriverLicenseClass() {
        super();
    }

    /**
     * Constructor with all fields
     * 
     * @param email User's email address
     * @param phoneNumber User's phone number
     * @param fullName User's full name
     * @param dob User's date of birth in YYYYMMDD format
     * @param licenseNumber User's license number
     */
    public DriverLicenseClass(String email, String phoneNumber, String fullName, String dob, String licenseNumber) {
        super(email, phoneNumber);
        this.fullName = fullName;
        this.dob = dob;
        this.licenseNumber = licenseNumber;
    }

    // Getters and setters
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getLicenseNumber() {
        return licenseNumber;
    }

    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }

    /**
     * Override the base validation method to include driver license specific validations
     * 
     * @return true if all driver license data is valid, false otherwise
     */
    @Override
    public boolean validateUpload() {
        // Will combine validations from parent class and driver license specific validations
        // Actual validation logic will be implemented later
        return false;
    }

    /**
     * Checks if full name format is valid
     * 
     * @param fullName The full name to validate
     * @return true if full name is valid, false otherwise
     */
    protected boolean validateFullName(String fullName) {
        // Full name validation will be implemented later
        return false;
    }

    /**
     * Checks if date of birth is valid and user is 18+
     * 
     * @param dob The date of birth to validate
     * @return true if date of birth is valid, false otherwise
     */
    protected boolean validateDob(String dob) {
        // DOB validation will be implemented later
        return false;
    }

    /**
     * Checks if license number format is valid
     * 
     * @param licenseNumber The license number to validate
     * @return true if license number is valid, false otherwise
     */
    protected boolean validateLicenseNumber(String licenseNumber) {
        // License number validation will be implemented later
        return false;
    }
}


/**
* Verified Upload class that extends UnverifiedUpload
* Includes additional administrative fields for verified uploads
*/
public class VerifiedUpload extends UnverifiedUpload {
    // Additional fields from the admin upload table
    private String debtOwedTo;
    private String debtType;
    private float debtAmount;
    private String missingWork;
    private String notes;

    /**
     * Default constructor
     */
    public VerifiedUpload() {
        super();
    }

    /**
     * Constructor with base fields from UnverifiedUpload
     * 
     * @param email User's email address
     * @param phoneNumber User's phone number
     */
    public VerifiedUpload(String email, String phoneNumber) {
        super(email, phoneNumber);
    }

    /**
     * Complete constructor with all fields
     * 
     * @param email User's email address
     * @param phoneNumber User's phone number
     * @param debtOwedTo Entity to whom debt is owed
     * @param debtType Type of debt
     * @param debtAmount Amount of debt as a float
     * @param missingWork Description of missing work
     * @param notes Additional notes
     */
    public VerifiedUpload(String email, String phoneNumber, String debtOwedTo, 
                         String debtType, float debtAmount, String missingWork, String notes) {
        super(email, phoneNumber);
        this.debtOwedTo = debtOwedTo;
        this.debtType = debtType;
        this.debtAmount = debtAmount;
        this.missingWork = missingWork;
        this.notes = notes;
    }

    // Getters and setters for the additional fields
    public String getDebtOwedTo() {
        return debtOwedTo;
    }

    public void setDebtOwedTo(String debtOwedTo) {
        this.debtOwedTo = debtOwedTo;
    }

    public String getDebtType() {
        return debtType;
    }

    public void setDebtType(String debtType) {
        this.debtType = debtType;
    }

    public float getDebtAmount() {
        return debtAmount;
    }

    public void setDebtAmount(float debtAmount) {
        this.debtAmount = debtAmount;
    }

    public String getMissingWork() {
        return missingWork;
    }

    public void setMissingWork(String missingWork) {
        this.missingWork = missingWork;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    /**
     * Override the validation method to include verification of admin fields
     * 
     * @return true if all data is valid, false otherwise
     */
    @Override
    public boolean validateUpload() {
        // Call parent validation and then validate the additional fields
        boolean baseValid = super.validateUpload();
        // Additional validation logic will be implemented later
        return baseValid && validateAdminFields();
    }

    /**
     * Validates all admin-specific fields
     * 
     * @return true if all admin fields are valid, false otherwise
     */
    private boolean validateAdminFields() {
        // Will combine all admin field validations
        // Actual validation logic will be implemented later
        return false;
    }

    /**
     * Validates the debt owed to field
     * 
     * @param debtOwedTo The debt owed to value to validate
     * @return true if valid, false otherwise
     */
    protected boolean validateDebtOwedTo(String debtOwedTo) {
        // Debt owed to validation will be implemented later
        return false;
    }

    /**
     * Validates the debt type field
     * 
     * @param debtType The debt type value to validate
     * @return true if valid, false otherwise
     */
    protected boolean validateDebtType(String debtType) {
        // Debt type validation will be implemented later
        return false;
    }

    /**
     * Validates the debt amount field
     * 
     * @param debtAmount The debt amount value to validate
     * @return true if valid, false otherwise
     */
    protected boolean validateDebtAmount(float debtAmount) {
        // Debt amount validation will be implemented later
        return false;
    }

    /**
     * Validates the missing work field
     * 
     * @param missingWork The missing work value to validate
     * @return true if valid, false otherwise
     */
    protected boolean validateMissingWork(String missingWork) {
        // Missing work validation will be implemented later
        return false;
    }

    /**
     * Validates the notes field
     * 
     * @param notes The notes value to validate
     * @return true if valid, false otherwise
     */
    protected boolean validateNotes(String notes) {
        // Notes validation will be implemented later
        return false;
    }
}
