const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Driver = require("../DBConnection/Driver");

class ReviewProfile {

    //search for pending profiles
    async searchPendingProfiles() {
        try {
            const pendingProfiles = await Driver.find({status: "pending"});
            return pendingProfiles;
        }
        catch (error) {
            console.error("Error searching for pending profiles:", error);
            return null;
        }   
    }

/*    //display the search results
    async displaySearchResults() {
        const pendingProfiles = await this.searchPendingProfiles();
        return pendingProfiles;
        } 

    //choose the profile to approve or deny
    async getPendingProfiles() {
        return await this.database.getPendingProfiles();
}*/

    //view the profile information
    async viewProfile(profileID) {
        return await Driver.findById(profileID);
    }

    async updateProfile(profileID, profileData) {
        return await Driver.findByIdAndUpdate(profileID, profileData, { new: true });
    }

    //approve the profile
    async approveProfile(profileID) {
        const profile = await this.viewProfile(profileID);
        if (profile) {
            return await Driver.findByIdAndUpdate(profileID, { status: "approved" }, { new: true });
        }
        return null;
    }

    //deny the profile 
    async denyProfile(profileID) {
        const profile = await this.viewProfile(profileID);
        if (profile) {
            return await Driver.findByIdandUpdate(profileID, {status: "unapproved"}, {new: true});
        }
        return null;
    }
}

    // Create an instance of the class
    const reviewInstance = new ReviewProfile();

    // PUT approve a profile
    router.put("/:id/approve", async (req, res) => {
        try {
            const result = await reviewInstance.approveProfile(req.params.id);
            if (!result) return res.status(404).json({ message: "Profile not found" });
            res.json({ message: "Profile approved", profile: result });
        } catch (err) {
            res.status(500).json({ message: "Error approving profile", error: err });
        }
    });

        // PUT deny a profile
    router.put("/:id/deny", async (req, res) => {
        try {
            const result = await reviewInstance.denyProfile(req.params.id);
            if (!result) return res.status(404).json({ message: "Profile not found" });
            res.json({ message: "Profile denied", profile: result });
        } catch (err) {
            res.status(500).json({ message: "Error denying profile", error: err });
            }
    });

module.exports = router;