export const isScreenRecordingEnabled = async (): Promise<boolean> => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      const tracks = stream.getVideoTracks();
      const mediaStreamTrack = tracks[0];
      const capabilities = mediaStreamTrack.getCapabilities();
  
      // Check if mediaSource is set to 'screen' to determine if screen recording is enabled
    //   @ts-ignore
      const isScreenRecordingEnabled = capabilities.mediaSource === 'screen';
  
      // Stop the screen recording stream
      stream.getTracks().forEach((track) => track.stop());
  
      return isScreenRecordingEnabled;
    } catch (error) {
      console.error('Error checking screen recording:', error);
      return false;
    }
  };
  