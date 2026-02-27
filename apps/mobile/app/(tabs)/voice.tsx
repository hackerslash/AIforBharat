import { router } from "expo-router";
import { Audio } from "expo-av";
import { Check, Mic, RefreshCw, Type } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function VoiceTab() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [transcription, setTranscription] = useState<string | null>(null);

  const handleMic = async () => {
    if (!recording) {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });
      const { recording: rec } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecording(rec);
      return;
    }
    await recording.stopAndUnloadAsync();
    setRecording(null);
    setTranscription("Nange 5kg tomato seeds bekku next week ge");
  };

  return (
    <View className="flex-1 items-center bg-cream px-6 pb-8 pt-8">
      <Text className="text-center text-base text-primary">Tap the mic and speak your order in your language</Text>
      <TouchableOpacity onPress={handleMic} className="mt-8 h-[220px] w-[220px] items-center justify-center rounded-full bg-white">
        <View className={`h-[160px] w-[160px] items-center justify-center rounded-full ${recording ? "bg-primary/30" : "bg-primary/15"}`}>
          <View className="h-[120px] w-[120px] items-center justify-center rounded-full bg-primary"><Mic size={46} color="#FCF6F5" /></View>
        </View>
      </TouchableOpacity>
      <Text className="mt-4 text-sm text-primary">{recording ? "Recording... tap to stop" : "Tap to record · 22 languages"}</Text>
      {transcription ? (
        <>
          <View className="mt-5 w-full rounded-[20px] bg-beige p-4"><View className="mb-2 flex-row items-center gap-2"><Type size={16} color="#2C5F2D" /><Text className="font-semibold text-primary">Transcription</Text></View><Text className="text-primary">{transcription}</Text></View>
          <View className="mt-4 w-full rounded-[20px] bg-primary p-4"><Text className="font-semibold text-white">Extracted Order Details</Text><Text className="mt-2 text-white">Product: Tomato Seeds</Text><Text className="text-white">Quantity: 5 kg</Text><Text className="text-white">Delivery: Next Week</Text></View>
          <View className="mt-5 w-full flex-row gap-3"><TouchableOpacity onPress={() => setTranscription(null)} className="h-[52px] flex-1 flex-row items-center justify-center gap-2 rounded-full bg-beige"><RefreshCw size={16} color="#2C5F2D" /><Text className="text-primary">Re-record</Text></TouchableOpacity><TouchableOpacity onPress={() => router.push('/orders/confirm')} className="h-[52px] flex-1 flex-row items-center justify-center gap-2 rounded-full bg-primary"><Check size={16} color="#FCF6F5" /><Text className="text-white">Confirm Order</Text></TouchableOpacity></View>
        </>
      ) : null}
    </View>
  );
}
