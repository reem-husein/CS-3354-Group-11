public class VerifiedProfile {
    // add license class as attribute??
    private String email;
    private String fullName;
    private int phoneNumber;
    private String debtOwedTo;
    private String debtType;
    private float debtAmount;
    private String missingWork;
    private String notes;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

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
}
