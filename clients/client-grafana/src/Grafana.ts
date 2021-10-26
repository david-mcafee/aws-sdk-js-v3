import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateLicenseCommand,
  AssociateLicenseCommandInput,
  AssociateLicenseCommandOutput,
} from "./commands/AssociateLicenseCommand";
import {
  CreateWorkspaceCommand,
  CreateWorkspaceCommandInput,
  CreateWorkspaceCommandOutput,
} from "./commands/CreateWorkspaceCommand";
import {
  DeleteWorkspaceCommand,
  DeleteWorkspaceCommandInput,
  DeleteWorkspaceCommandOutput,
} from "./commands/DeleteWorkspaceCommand";
import {
  DescribeWorkspaceAuthenticationCommand,
  DescribeWorkspaceAuthenticationCommandInput,
  DescribeWorkspaceAuthenticationCommandOutput,
} from "./commands/DescribeWorkspaceAuthenticationCommand";
import {
  DescribeWorkspaceCommand,
  DescribeWorkspaceCommandInput,
  DescribeWorkspaceCommandOutput,
} from "./commands/DescribeWorkspaceCommand";
import {
  DisassociateLicenseCommand,
  DisassociateLicenseCommandInput,
  DisassociateLicenseCommandOutput,
} from "./commands/DisassociateLicenseCommand";
import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "./commands/ListPermissionsCommand";
import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "./commands/ListWorkspacesCommand";
import {
  UpdatePermissionsCommand,
  UpdatePermissionsCommandInput,
  UpdatePermissionsCommandOutput,
} from "./commands/UpdatePermissionsCommand";
import {
  UpdateWorkspaceAuthenticationCommand,
  UpdateWorkspaceAuthenticationCommandInput,
  UpdateWorkspaceAuthenticationCommandOutput,
} from "./commands/UpdateWorkspaceAuthenticationCommand";
import {
  UpdateWorkspaceCommand,
  UpdateWorkspaceCommandInput,
  UpdateWorkspaceCommandOutput,
} from "./commands/UpdateWorkspaceCommand";
import { GrafanaClient } from "./GrafanaClient";

/**
 * <p>Amazon Managed Grafana is a fully managed and secure data visualization service that you can use to
 *        instantly query, correlate, and visualize operational metrics, logs, and traces from multiple sources.
 *        Amazon Managed Grafana makes it easy to deploy, operate, and scale Grafana, a widely deployed data visualization tool
 *        that is popular for its extensible data support.</p>
 *          <p>With Amazon Managed Grafana, you create logically isolated Grafana servers called <i>workspaces</i>. In
 *         a workspace,  you can create  Grafana dashboards and visualizations to analyze your metrics, logs, and traces without having to
 *        build, package, or deploy any hardware to run Grafana servers.  </p>
 */
export class Grafana extends GrafanaClient {
  /**
   * <p>Assigns a Grafana Enterprise license to a workspace. Upgrading to Grafana Enterprise
   *          incurs additional fees. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html">Upgrade a workspace to
   *             Grafana Enterprise</a>.</p>
   */
  public associateLicense(
    args: AssociateLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateLicenseCommandOutput>;
  public associateLicense(
    args: AssociateLicenseCommandInput,
    cb: (err: any, data?: AssociateLicenseCommandOutput) => void
  ): void;
  public associateLicense(
    args: AssociateLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLicenseCommandOutput) => void
  ): void;
  public associateLicense(
    args: AssociateLicenseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateLicenseCommandOutput) => void),
    cb?: (err: any, data?: AssociateLicenseCommandOutput) => void
  ): Promise<AssociateLicenseCommandOutput> | void {
    const command = new AssociateLicenseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a <i>workspace</i>. In a workspace, you can create Grafana
   *          dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to
   *          build, package, or deploy any hardware to run the Grafana server.</p>
   *          <p>Don't use <code>CreateWorkspace</code> to modify an existing workspace. Instead,
   *          use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspace.html">UpdateWorkspace</a>.</p>
   */
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceCommandOutput>;
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): Promise<CreateWorkspaceCommandOutput> | void {
    const command = new CreateWorkspaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an Amazon Managed Grafana workspace.</p>
   */
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceCommandOutput>;
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): Promise<DeleteWorkspaceCommandOutput> | void {
    const command = new DeleteWorkspaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Displays information about one Amazon Managed Grafana workspace.</p>
   */
  public describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceCommandOutput>;
  public describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;
  public describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;
  public describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): Promise<DescribeWorkspaceCommandOutput> | void {
    const command = new DescribeWorkspaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Displays information about the authentication methods used in one Amazon Managed Grafana workspace.</p>
   */
  public describeWorkspaceAuthentication(
    args: DescribeWorkspaceAuthenticationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceAuthenticationCommandOutput>;
  public describeWorkspaceAuthentication(
    args: DescribeWorkspaceAuthenticationCommandInput,
    cb: (err: any, data?: DescribeWorkspaceAuthenticationCommandOutput) => void
  ): void;
  public describeWorkspaceAuthentication(
    args: DescribeWorkspaceAuthenticationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceAuthenticationCommandOutput) => void
  ): void;
  public describeWorkspaceAuthentication(
    args: DescribeWorkspaceAuthenticationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorkspaceAuthenticationCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkspaceAuthenticationCommandOutput) => void
  ): Promise<DescribeWorkspaceAuthenticationCommandOutput> | void {
    const command = new DescribeWorkspaceAuthenticationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the Grafana Enterprise license from a workspace.</p>
   */
  public disassociateLicense(
    args: DisassociateLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLicenseCommandOutput>;
  public disassociateLicense(
    args: DisassociateLicenseCommandInput,
    cb: (err: any, data?: DisassociateLicenseCommandOutput) => void
  ): void;
  public disassociateLicense(
    args: DisassociateLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLicenseCommandOutput) => void
  ): void;
  public disassociateLicense(
    args: DisassociateLicenseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateLicenseCommandOutput) => void),
    cb?: (err: any, data?: DisassociateLicenseCommandOutput) => void
  ): Promise<DisassociateLicenseCommandOutput> | void {
    const command = new DisassociateLicenseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the users and groups who have the Grafana <code>Admin</code> and
   *          <code>Editor</code> roles in this workspace. If you use this
   *       operation without specifying <code>userId</code> or <code>groupId</code>, the operation returns
   *          the roles of all users
   *          and groups. If you specify a <code>userId</code> or a <code>groupId</code>, only the roles
   *          for that user or group are returned. If you do this, you can specify only one <code>userId</code> or
   *          one <code>groupId</code>.</p>
   */
  public listPermissions(
    args: ListPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionsCommandOutput>;
  public listPermissions(
    args: ListPermissionsCommandInput,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;
  public listPermissions(
    args: ListPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;
  public listPermissions(
    args: ListPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPermissionsCommandOutput) => void),
    cb?: (err: any, data?: ListPermissionsCommandOutput) => void
  ): Promise<ListPermissionsCommandOutput> | void {
    const command = new ListPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of Amazon Managed Grafana workspaces in the account, with some information
   *          about each workspace. For more complete information about one workspace, use <a href="https://docs.aws.amazon.com/AAMG/latest/APIReference/API_DescribeWorkspace.html">DescribeWorkspace</a>.</p>
   */
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspacesCommandOutput>;
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkspacesCommandOutput) => void),
    cb?: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): Promise<ListWorkspacesCommandOutput> | void {
    const command = new ListWorkspacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates which users in a workspace have the Grafana <code>Admin</code> or <code>Editor</code> roles.</p>
   */
  public updatePermissions(
    args: UpdatePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePermissionsCommandOutput>;
  public updatePermissions(
    args: UpdatePermissionsCommandInput,
    cb: (err: any, data?: UpdatePermissionsCommandOutput) => void
  ): void;
  public updatePermissions(
    args: UpdatePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePermissionsCommandOutput) => void
  ): void;
  public updatePermissions(
    args: UpdatePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdatePermissionsCommandOutput) => void
  ): Promise<UpdatePermissionsCommandOutput> | void {
    const command = new UpdatePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any
   *       optional parameters, the existing values of those parameters are not changed.</p>
   *          <p>To modify the user authentication methods that the workspace uses, such as SAML or Amazon Web Services SSO,
   *          use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceAuthentication.html">UpdateWorkspaceAuthentication</a>.</p>
   *          <p>To modify which users in the workspace have the <code>Admin</code> and <code>Editor</code> Grafana roles,
   *          use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a>.</p>
   */
  public updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceCommandOutput>;
  public updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    cb: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): void;
  public updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): void;
  public updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): Promise<UpdateWorkspaceCommandOutput> | void {
    const command = new UpdateWorkspaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Use this operation to define the identity provider (IdP) that this workspace
   *          authenticates users from, using SAML. You can also map SAML assertion attributes to
   *          workspace user information and define which groups in the assertion attribute are to have
   *          the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p>
   */
  public updateWorkspaceAuthentication(
    args: UpdateWorkspaceAuthenticationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceAuthenticationCommandOutput>;
  public updateWorkspaceAuthentication(
    args: UpdateWorkspaceAuthenticationCommandInput,
    cb: (err: any, data?: UpdateWorkspaceAuthenticationCommandOutput) => void
  ): void;
  public updateWorkspaceAuthentication(
    args: UpdateWorkspaceAuthenticationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceAuthenticationCommandOutput) => void
  ): void;
  public updateWorkspaceAuthentication(
    args: UpdateWorkspaceAuthenticationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkspaceAuthenticationCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkspaceAuthenticationCommandOutput) => void
  ): Promise<UpdateWorkspaceAuthenticationCommandOutput> | void {
    const command = new UpdateWorkspaceAuthenticationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}