"use client";

import { Play } from "lucide-react";
import { useState } from "react";

import { contentData } from "~/lib/content-data";

const VideoSection = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section className="flex flex-col" id="video">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>{contentData.video.title}</h2>
        <p className="text-muted-foreground max-w-2xl">
          {contentData.video.description}
        </p>
      </div>

      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl shadow-xl">
        {!videoPlaying ? (
          <div
            className="group relative cursor-pointer overflow-hidden"
            onClick={() => setVideoPlaying(true)}
          >
            <div
              className="relative aspect-video w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${contentData.video.thumbnail})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/40">
                <div className="bg-primary/90 flex h-20 w-20 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-10 w-10" fill="white" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`${contentData.video.videoUrl}?autoplay=1`}
              title="Product Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
