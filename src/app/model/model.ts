
export interface CurrentUser {
    userId: number;
    userName: string;
}

export interface Slot {
    slotId: number;
    planName: string;
    date: string;
    fromTime: string;
    toTime: string;
    totalCost: number;
}


export interface DoctorSummary {
    doctorName: string;
    rating: number;
    specialization: string;
    consultationFees: number;
}
export interface BookedslotAppointments {

    hospitalName: string;
    date: string;
    slotTime: string;
    patientId: number;
    patientName: string;
    email: string;
    mobile: number;

}
export interface SchemaSummary {
    doctorName: string;
    rating: number;
    specialization: string;
    consultationFees: number;
}

