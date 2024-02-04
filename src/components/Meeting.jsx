import { MeetingProvider } from "@videosdk.live/react-sdk";
import MeetingView from "./MeetingView";

const Meeting = () => {
  return (
    <MeetingProvider
      config={{
        meetingId: "pmsb-dy8m-lwwn",
        micEnabled: true,
        webcamEnabled: true,
        name: "Soab's Org",
      }}
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJiMmIzM2U1NC1iNTFhLTQxODQtOTYzZC01MzVhMjAwMDE4NmMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNzA2NjU2NCwiZXhwIjoxNzA3MTUyOTY0fQ.56z7A1uwVahfWj0MBbETRfsXppkS2S2W_0yPUcN0gP8"
    >
      <MeetingView />
    </MeetingProvider>
  );
};
export default Meeting;
