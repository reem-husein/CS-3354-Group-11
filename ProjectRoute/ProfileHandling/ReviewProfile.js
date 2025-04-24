const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Driver = require("../DBConnection/Driver");

class ReviewProfile {

    //search for pending profiles
    async searchPendingProfiles() {
        try {
            const pendingProfiles = await Driver.find({ status: "pending" });
            return pendingProfiles;
        }
        catch (error) {
            console.error("Error searching for pending profiles:", error);
            return null;
        }   
    }

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
            return await Driver.findByIdAndUpdate(profileID, {status: "denied"}, { new: true });
        } 
        return null;
    }
}

    // Create an instance of the class
    const reviewInstance = new ReviewProfile();

    // GET pending profiles
    router.get("/pending", async (req, res) => {
        try {
            const pending = await reviewInstance.searchPendingProfiles();
            res.json(pending);
        } catch (err) {
            res.status(500).json({ message: "Error fetching pending profiles", error: err });
        }
    });

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