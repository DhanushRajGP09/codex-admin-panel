
export const baseAPIURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const apiURLs = {
login:`${baseAPIURL}/user/sign-in`,
alltest:`${baseAPIURL}/test`,
searchtest:`${baseAPIURL}/test/search-test`,
particulartest:`${baseAPIURL}/test/view-test`,
getalladmins:`${baseAPIURL}/user/get-all-admins`,
}