interface DeviceStruc {
    id: string;
    name: string;
    icon: React.ReactNode;
}

interface SubDevicesStruc{
    id: string;
    name: string;
    icon: React.ReactNode;
    status: string;
}

interface Response{
    error: boolean;
    message: string;
    token?: string
}

export type {DeviceStruc, SubDevicesStruc, Response}