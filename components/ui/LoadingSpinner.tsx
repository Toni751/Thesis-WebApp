import { Spinner } from "./spinner";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <Spinner size="large" className="text-white" />
    </div>
  );
}
