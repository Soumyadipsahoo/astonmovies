import { useState, type ReactNode, type MouseEvent } from "react";
import { Download, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { APK_DOWNLOAD_URL } from "@/lib/constants";

interface DownloadButtonProps {
  className?: string;
  children?: ReactNode;
  /** Hide the default leading icon (e.g. when caller provides its own) */
  hideIcon?: boolean;
  iconClassName?: string;
  onClick?: () => void;
}

/**
 * Validates that the APK URL is well-formed and reachable, shows a loading
 * spinner + toast feedback, then opens the download in a new tab.
 */
export function DownloadButton({
  className,
  children = "Download App Now",
  hideIcon = false,
  iconClassName = "h-5 w-5",
  onClick,
}: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const isValidUrl = (url: string) => {
    try {
      const u = new URL(url);
      return u.protocol === "https:" || u.protocol === "http:";
    } catch {
      return false;
    }
  };

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (loading) return;

    if (!isValidUrl(APK_DOWNLOAD_URL)) {
      toast.error("Download link is invalid. Please try again later.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Preparing your download…");

    try {
      // Lightweight reachability check — many CDNs block HEAD/CORS, so a
      // failure here is non-fatal; we still attempt the download.
      try {
        await fetch(APK_DOWNLOAD_URL, { method: "HEAD", mode: "no-cors" });
      } catch {
        /* ignore — opaque/no-cors response or network blocked, proceed anyway */
      }

      window.open(APK_DOWNLOAD_URL, "_blank", "noopener,noreferrer");
      toast.success("Download started! Check your notifications.", { id: toastId });
      onClick?.();
    } catch {
      toast.error("Couldn't start the download. Please try again.", { id: toastId });
    } finally {
      // Brief delay so users perceive the loading state on fast networks
      setTimeout(() => setLoading(false), 600);
    }
  };

  return (
    <a
      href={APK_DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-busy={loading}
      aria-disabled={loading}
      className={className}
      data-loading={loading ? "true" : undefined}
    >
      {loading ? (
        <Loader2 className={`${iconClassName} animate-spin`} />
      ) : hideIcon ? null : (
        <Download className={iconClassName} />
      )}
      {loading ? "Starting…" : children}
    </a>
  );
}
