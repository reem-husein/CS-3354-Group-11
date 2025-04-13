
class reviewProfile {
    constructor(database) {
        this.database = database;
    }

    //search for unapproved profiles
    async searchUnapprovedProfiles() {

    }

    //display the search results
    async displaySearchResults() {

    
    }

    //choose the profile to approve or deny
    async getUnverifiedProfiles() {
        return await this.database.getUnverifiedProfiles();
}

    //view the profile information
    async viewProfile(profileID) {
        return await this.database.getProfileByID(profileID);
    }

    //approve the profile
    async approveProfile(profileID) {
        const profile = await this.viewProfile(profileID);
        if (profile) {
            profile.status = "approved";
            await this.database.updateProfile(profileID, profile);
            return true;
        }
    }

    //deny the profile -> delete the profile
    async denyProfile(profileID) {
        const profile = await this.viewProfile(profileID);
        if (profile) {
            profile.status = "denied";
            await this.database.deleteProfile(profileID);
            return true;
        }
        return false;
    }
}
