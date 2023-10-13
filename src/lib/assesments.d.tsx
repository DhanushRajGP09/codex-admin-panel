export interface IAssesment{
        _id: string,
        questionId: IQuestiondetails[],
        testName: string,
        testAccess: boolean,
        questionShuffling: boolean,
        allowCopyPaste: boolean,
        takeCandidatesSnapshot: boolean,
        logoutOnLeavingTestInterface: boolean,
        restrictTestAccessForIp: boolean,
        tags: string[],
        status: string,
        testPublished: boolean,
        candidates: number,
        createdAt: string,
        updatedAt: string,
        pointOfContact: string,
        instructions: string,
        testDuration: string,
        testEndDate: string,
        testStartDate: string    
}

export interface IQuestiondetails{
        _id: string,
        adminId: string,
        questionPublished: boolean,
        maxCodeSize: number,
        totalScoreForQuestion: number,
        difficultyLevel: string,
        questionName: string,
        questionStatement: string,
        questionType: string,
        languagesSupported: string[],
        createdAt: string,
        updatedAt: string,
        __v: number
      
}